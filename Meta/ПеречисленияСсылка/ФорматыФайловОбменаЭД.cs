
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
	public enum ‘орматы‘айловќбменаЁƒ
	{
		ѕуста€—сылка = - 1,
		XML = 0,//CommerceML (*.xml)
		PDF = 1,//ƒокумент PDF (*.pdf)
		HTML = 2,//ƒокумент HTML (*.html)
		DOCX = 3,//ƒокумент Word 2007 (*.docx)
		XLS = 4,//Ћист Excel (*.xls)
		MXL = 5,//“абличный документ (*.mxl)
		ODS = 6,//Ёлектронна€ таблица ODF (*.ods)
		—оставной‘ормат = 7,//—оставной формат (*.zip)
	}
	public static partial class ‘орматы‘айловќбменаЁƒ_«начени€//:ѕеречисление—сылка
	{
		public static readonly Guid XML = new Guid("158a9c8b-2830-3802-4ced-1992ed01e9ad");//CommerceML (*.xml)
		public static readonly Guid PDF = new Guid("b9506fb7-2ec4-a1eb-45d3-a38206f29af8");//ƒокумент PDF (*.pdf)
		public static readonly Guid HTML = new Guid("e1a358ad-f8b4-bdb6-423c-a6a4838076fe");//ƒокумент HTML (*.html)
		public static readonly Guid DOCX = new Guid("1ee453a7-afe0-57db-4cd1-94039009a50f");//ƒокумент Word 2007 (*.docx)
		public static readonly Guid XLS = new Guid("f58f408a-9927-91c4-49b1-925532d7e45c");//Ћист Excel (*.xls)
		public static readonly Guid MXL = new Guid("715ffa85-82c1-c392-416b-d75a4064fee8");//“абличный документ (*.mxl)
		public static readonly Guid ODS = new Guid("32b52d87-4a8c-b173-4691-f1bfd7cb9c3f");//Ёлектронна€ таблица ODF (*.ods)
		public static readonly Guid —оставной‘ормат = new Guid("4b0a54b2-ac71-2917-4019-6bafa148b163");//—оставной формат (*.zip)
		public static ‘орматы‘айловќбменаЁƒ ѕолучить(this ‘орматы‘айловќбменаЁƒ «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static ‘орматы‘айловќбменаЁƒ ѕолучить(this ‘орматы‘айловќбменаЁƒ «начение, Guid —сылка)
		{
			if(—сылка == XML)
			{
				return ‘орматы‘айловќбменаЁƒ.XML;
			}
			else if(—сылка == PDF)
			{
				return ‘орматы‘айловќбменаЁƒ.PDF;
			}
			else if(—сылка == HTML)
			{
				return ‘орматы‘айловќбменаЁƒ.HTML;
			}
			else if(—сылка == DOCX)
			{
				return ‘орматы‘айловќбменаЁƒ.DOCX;
			}
			else if(—сылка == XLS)
			{
				return ‘орматы‘айловќбменаЁƒ.XLS;
			}
			else if(—сылка == MXL)
			{
				return ‘орматы‘айловќбменаЁƒ.MXL;
			}
			else if(—сылка == ODS)
			{
				return ‘орматы‘айловќбменаЁƒ.ODS;
			}
			else if(—сылка == —оставной‘ормат)
			{
				return ‘орматы‘айловќбменаЁƒ.—оставной‘ормат;
			}
			return ‘орматы‘айловќбменаЁƒ.ѕуста€—сылка;
		}
		public static byte[]  люч(this ‘орматы‘айловќбменаЁƒ «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this ‘орматы‘айловќбменаЁƒ «начение)
		{
			switch («начение)
			{
				case ‘орматы‘айловќбменаЁƒ.XML: return XML;
				case ‘орматы‘айловќбменаЁƒ.PDF: return PDF;
				case ‘орматы‘айловќбменаЁƒ.HTML: return HTML;
				case ‘орматы‘айловќбменаЁƒ.DOCX: return DOCX;
				case ‘орматы‘айловќбменаЁƒ.XLS: return XLS;
				case ‘орматы‘айловќбменаЁƒ.MXL: return MXL;
				case ‘орматы‘айловќбменаЁƒ.ODS: return ODS;
				case ‘орматы‘айловќбменаЁƒ.—оставной‘ормат: return —оставной‘ормат;
			}
			return Guid.Empty;
		}
	}
}
