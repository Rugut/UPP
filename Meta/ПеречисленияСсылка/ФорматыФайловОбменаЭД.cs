
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	public enum ФорматыФайловОбменаЭД
	{
		ПустаяСсылка = - 1,
		XML = 0,//CommerceML (*.xml)
		PDF = 1,//Документ PDF (*.pdf)
		HTML = 2,//Документ HTML (*.html)
		DOCX = 3,//Документ Word 2007 (*.docx)
		XLS = 4,//Лист Excel (*.xls)
		MXL = 5,//Табличный документ (*.mxl)
		ODS = 6,//Электронная таблица ODF (*.ods)
		СоставнойФормат = 7,//Составной формат (*.zip)
	}
	public static partial class ФорматыФайловОбменаЭД_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid XML = new Guid("158a9c8b-2830-3802-4ced-1992ed01e9ad");//CommerceML (*.xml)
		public static readonly Guid PDF = new Guid("b9506fb7-2ec4-a1eb-45d3-a38206f29af8");//Документ PDF (*.pdf)
		public static readonly Guid HTML = new Guid("e1a358ad-f8b4-bdb6-423c-a6a4838076fe");//Документ HTML (*.html)
		public static readonly Guid DOCX = new Guid("1ee453a7-afe0-57db-4cd1-94039009a50f");//Документ Word 2007 (*.docx)
		public static readonly Guid XLS = new Guid("f58f408a-9927-91c4-49b1-925532d7e45c");//Лист Excel (*.xls)
		public static readonly Guid MXL = new Guid("715ffa85-82c1-c392-416b-d75a4064fee8");//Табличный документ (*.mxl)
		public static readonly Guid ODS = new Guid("32b52d87-4a8c-b173-4691-f1bfd7cb9c3f");//Электронная таблица ODF (*.ods)
		public static readonly Guid СоставнойФормат = new Guid("4b0a54b2-ac71-2917-4019-6bafa148b163");//Составной формат (*.zip)
		public static ФорматыФайловОбменаЭД Получить(this ФорматыФайловОбменаЭД Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ФорматыФайловОбменаЭД Получить(this ФорматыФайловОбменаЭД Значение, Guid Ссылка)
		{
			if(Ссылка == XML)
			{
				return ФорматыФайловОбменаЭД.XML;
			}
			else if(Ссылка == PDF)
			{
				return ФорматыФайловОбменаЭД.PDF;
			}
			else if(Ссылка == HTML)
			{
				return ФорматыФайловОбменаЭД.HTML;
			}
			else if(Ссылка == DOCX)
			{
				return ФорматыФайловОбменаЭД.DOCX;
			}
			else if(Ссылка == XLS)
			{
				return ФорматыФайловОбменаЭД.XLS;
			}
			else if(Ссылка == MXL)
			{
				return ФорматыФайловОбменаЭД.MXL;
			}
			else if(Ссылка == ODS)
			{
				return ФорматыФайловОбменаЭД.ODS;
			}
			else if(Ссылка == СоставнойФормат)
			{
				return ФорматыФайловОбменаЭД.СоставнойФормат;
			}
			return ФорматыФайловОбменаЭД.ПустаяСсылка;
		}
		public static byte[] Ключ(this ФорматыФайловОбменаЭД Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ФорматыФайловОбменаЭД Значение)
		{
			switch (Значение)
			{
				case ФорматыФайловОбменаЭД.XML: return XML;
				case ФорматыФайловОбменаЭД.PDF: return PDF;
				case ФорматыФайловОбменаЭД.HTML: return HTML;
				case ФорматыФайловОбменаЭД.DOCX: return DOCX;
				case ФорматыФайловОбменаЭД.XLS: return XLS;
				case ФорматыФайловОбменаЭД.MXL: return MXL;
				case ФорматыФайловОбменаЭД.ODS: return ODS;
				case ФорматыФайловОбменаЭД.СоставнойФормат: return СоставнойФормат;
			}
			return Guid.Empty;
		}
	}
}
