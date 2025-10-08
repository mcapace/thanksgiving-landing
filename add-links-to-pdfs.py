#!/usr/bin/env python3
"""
Script to add clickable links to recipe PDFs
Adds a "Visit Winery Website" button at the bottom of each page
"""

import os
from PyPDF2 import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import HexColor
from io import BytesIO

# Recipe data with PDF paths and winery URLs
RECIPES = [
    {
        "winery": "King Estate",
        "pdfPath": "public/recipes/KingEstatev1.pdf",
        "url": "https://kingestate.com/recipe-for-roasted-estate-squash-and-apple-soup/"
    },
    {
        "winery": "Calcareous Vineyard",
        "pdfPath": "public/recipes/Calcareousv2.pdf",
        "url": "https://www.calcareous.com/thanksgiving-wine/?utm_source=winespectator&utm_medium=email&utm_campaign=thanksgiving"
    },
    {
        "winery": "Gloria Ferrer Winery",
        "pdfPath": "public/recipes/GloriaFerrerv1.pdf",
        "url": "https://www.gloriaferrer.com/fall-recipe-with-the-2018-royal-cuvee/"
    },
    {
        "winery": "Marimar Estate",
        "pdfPath": "public/recipes/Marimarv2.pdf",
        "url": "https://www.marimarestate.com/Wines/Current-Releases"
    },
    {
        "winery": "McIntyre Vineyards",
        "pdfPath": "public/recipes/McIntyrev3.pdf",
        "url": "https://www.mcintyrevineyards.com/"
    },
    {
        "winery": "Pine Ridge Vineyards",
        "pdfPath": "public/recipes/PineRidgev2.pdf",
        "url": "https://www.pineridgevineyards.com/wine/2023-napa-valley-cabernet-sauvignon/"
    },
    {
        "winery": "St. Supéry Estate",
        "pdfPath": "public/recipes/StSuperyv2.pdf",
        "url": "https://www.stsupery.com/thanksgiving-checklist-enjoyment/"
    },
    {
        "winery": "The Vice Napa Valley",
        "pdfPath": "public/recipes/Vicev2.pdf",
        "url": "https://www.thevicenapavalley.com/"
    }
]

def create_link_overlay(url, winery_name, page_width, page_height):
    """Create a PDF overlay with a clickable button"""
    packet = BytesIO()
    can = canvas.Canvas(packet, pagesize=(page_width, page_height))
    
    # Button positioning (top right corner, away from logos)
    button_width = 180
    button_height = 35
    button_x = page_width - button_width - 20  # 20 points from right edge
    button_y = page_height - button_height - 20  # 20 points from top
    
    # Draw button background (wine red color with slight transparency effect)
    can.setFillColor(HexColor('#8B2332'))
    can.roundRect(button_x, button_y, button_width, button_height, 6, fill=1, stroke=0)
    
    # Add text
    can.setFillColor(HexColor('#FFFFFF'))
    can.setFont("Helvetica-Bold", 10)
    text = f"Visit Winery →"
    text_width = can.stringWidth(text, "Helvetica-Bold", 10)
    text_x = button_x + (button_width - text_width) / 2
    text_y = button_y + (button_height - 10) / 2 + 2
    can.drawString(text_x, text_y, text)
    
    # Add clickable link
    can.linkURL(url, (button_x, button_y, button_x + button_width, button_y + button_height), relative=0)
    
    can.save()
    packet.seek(0)
    return PdfReader(packet)

def add_link_to_pdf(input_path, output_path, url, winery_name):
    """Add clickable link button to all pages of a PDF"""
    try:
        # Read the original PDF
        reader = PdfReader(input_path)
        writer = PdfWriter()
        
        print(f"  Processing {len(reader.pages)} page(s)...")
        
        # Process each page
        for page_num, page in enumerate(reader.pages):
            # Get page dimensions
            page_width = float(page.mediabox.width)
            page_height = float(page.mediabox.height)
            
            # Create overlay with link button
            overlay = create_link_overlay(url, winery_name, page_width, page_height)
            
            # Merge overlay onto original page
            page.merge_page(overlay.pages[0])
            writer.add_page(page)
        
        # Write output file
        with open(output_path, 'wb') as output_file:
            writer.write(output_file)
        
        print(f"  ✅ Successfully created: {output_path}")
        return True
        
    except Exception as e:
        print(f"  ❌ Error processing {input_path}: {str(e)}")
        return False

def main():
    print("\n🍷 Adding Clickable Links to Recipe PDFs\n")
    print("=" * 60)
    
    success_count = 0
    error_count = 0
    
    for recipe in RECIPES:
        winery = recipe['winery']
        pdf_path = recipe['pdfPath']
        url = recipe['url']
        
        print(f"\n📄 {winery}")
        
        if not os.path.exists(pdf_path):
            print(f"  ⚠️  PDF not found: {pdf_path}")
            error_count += 1
            continue
        
        # Create backup directory if it doesn't exist
        backup_dir = "public/recipes/backup_originals"
        os.makedirs(backup_dir, exist_ok=True)
        
        # Backup original file
        backup_path = os.path.join(backup_dir, os.path.basename(pdf_path))
        if not os.path.exists(backup_path):
            import shutil
            shutil.copy2(pdf_path, backup_path)
            print(f"  💾 Backed up original to: {backup_path}")
        
        # Process PDF
        if add_link_to_pdf(pdf_path, pdf_path, url, winery):
            success_count += 1
        else:
            error_count += 1
    
    print("\n" + "=" * 60)
    print(f"\n✨ Complete!")
    print(f"   ✅ Successfully processed: {success_count} PDFs")
    if error_count > 0:
        print(f"   ❌ Errors: {error_count} PDFs")
    print(f"\n📦 Original files backed up to: public/recipes/backup_originals/")
    print("\n💡 Test the PDFs by opening them - each page should have a")
    print("   clickable 'Visit [Winery] Website' button at the bottom!\n")

if __name__ == "__main__":
    main()

