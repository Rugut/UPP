
using System;
using System.Runtime.Serialization;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
	[DataContract]
	public enum ТипыСодержимогоФайлов
	{
		[NonSerialized]
		ПустаяСсылка = - 1,
		[EnumMember(Value = "{\"Ссылка\":\"98da877b-42b0-46be-a57e-423402e735a3\", \"Представление\":\"Текст866\"}")]
		Текст866 = 0,//Текст в кодировке DOS
		[EnumMember(Value = "{\"Ссылка\":\"87c2b717-8f4d-4fa1-984b-84159af41631\", \"Представление\":\"Текст1251\"}")]
		Текст1251 = 1,
		[EnumMember(Value = "{\"Ссылка\":\"cad2ab82-5314-488e-8bd8-4571a273e774\", \"Представление\":\"xml\"}")]
		xml = 2,
		[EnumMember(Value = "{\"Ссылка\":\"d46d1d6c-5a32-4105-9199-bef675c78fbc\", \"Представление\":\"html\"}")]
		html = 3,
		[EnumMember(Value = "{\"Ссылка\":\"dea310f5-de9c-46af-982f-3e15d7221c45\", \"Представление\":\"pdf\"}")]
		pdf = 4,//Документ в формате PDF
		[EnumMember(Value = "{\"Ссылка\":\"c0e6083c-f2ec-4d7c-a92f-6c8b142a2ded\", \"Представление\":\"rtf\"}")]
		rtf = 5,//Документ в формате RTF
		[EnumMember(Value = "{\"Ссылка\":\"d8e33a14-809a-440a-a517-1a835bcd2d0f\", \"Представление\":\"tiff\"}")]
		tiff = 6,//Документ в формате TIFF
		[EnumMember(Value = "{\"Ссылка\":\"36701a44-f464-4b59-9ca5-cf77a319cafc\", \"Представление\":\"jpeg\"}")]
		jpeg = 7,//Документ в формате JPEG
		[EnumMember(Value = "{\"Ссылка\":\"2c240515-4831-4fb5-a51d-ee0b15699d70\", \"Представление\":\"ms_word\"}")]
		ms_word = 8,//Документ в формате Microsoft Word
		[EnumMember(Value = "{\"Ссылка\":\"77fce2ae-bb84-47cd-846c-406cfa8ebafa\", \"Представление\":\"ms_excel\"}")]
		ms_excel = 9,//Документ в формате Microsoft Excel
		[EnumMember(Value = "{\"Ссылка\":\"8ffe72ec-c6bd-4f99-9523-a83b94a7cd48\", \"Представление\":\"odf_text\"}")]
		odf_text = 10,//Документ в формате Open Document Text
		[EnumMember(Value = "{\"Ссылка\":\"37943491-c95f-45b4-b067-1868aee6d27a\", \"Представление\":\"odf_spreadsheet\"}")]
		odf_spreadsheet = 11,//Документ в формате Open Document Spreadsheet
		[EnumMember(Value = "{\"Ссылка\":\"332da8bc-b1c4-45cf-8c67-ce24a15b813e\", \"Представление\":\"oxml_word\"}")]
		oxml_word = 12,//Документ в формате Open XML Word
		[EnumMember(Value = "{\"Ссылка\":\"b5cdb6f9-4ce7-4121-b62a-41cd37dd6ebe\", \"Представление\":\"oxml_spreadsheet\"}")]
		oxml_spreadsheet = 13,//Документ в формате Open XML Spreadsheet
		[EnumMember(Value = "{\"Ссылка\":\"acf5175c-00e8-4d7d-98f2-dc9ec5720310\", \"Представление\":\"Неизвестный\"}")]
		Неизвестный = 14,
	}
	public static partial class ТипыСодержимогоФайлов_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Текст866 = new Guid("34427ea5-e702-a335-46be-42b098da877b");//Текст в кодировке DOS
		public static readonly Guid Текст1251 = new Guid("15844b98-f49a-3116-4fa1-8f4d87c2b717");
		public static readonly Guid xml = new Guid("7145d88b-73a2-74e7-488e-5314cad2ab82");
		public static readonly Guid html = new Guid("f6be9991-c775-bc8f-4105-5a32d46d1d6c");
		public static readonly Guid pdf = new Guid("153e2f98-22d7-451c-46af-de9cdea310f5");//Документ в формате PDF
		public static readonly Guid rtf = new Guid("8b6c2fa9-2a14-ed2d-4d7c-f2ecc0e6083c");//Документ в формате RTF
		public static readonly Guid tiff = new Guid("831a17a5-cd5b-0f2d-440a-809ad8e33a14");//Документ в формате TIFF
		public static readonly Guid jpeg = new Guid("77cfa59c-19a3-fcca-4b59-f46436701a44");//Документ в формате JPEG
		public static readonly Guid ms_word = new Guid("0bee1da5-6915-709d-4fb5-48312c240515");//Документ в формате Microsoft Word
		public static readonly Guid ms_excel = new Guid("6c406c84-8efa-faba-47cd-bb8477fce2ae");//Документ в формате Microsoft Excel
		public static readonly Guid odf_text = new Guid("3ba82395-a794-48cd-4f99-c6bd8ffe72ec");//Документ в формате Open Document Text
		public static readonly Guid odf_spreadsheet = new Guid("681867b0-e6ae-7ad2-45b4-c95f37943491");//Документ в формате Open Document Spreadsheet
		public static readonly Guid oxml_word = new Guid("24ce678c-5ba1-3e81-45cf-b1c4332da8bc");//Документ в формате Open XML Word
		public static readonly Guid oxml_spreadsheet = new Guid("cd412ab6-dd37-be6e-4121-4ce7b5cdb6f9");//Документ в формате Open XML Spreadsheet
		public static readonly Guid Неизвестный = new Guid("9edcf298-72c5-1003-4d7d-00e8acf5175c");
		public static ТипыСодержимогоФайлов Получить(this ТипыСодержимогоФайлов Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ТипыСодержимогоФайлов Получить(this ТипыСодержимогоФайлов Значение, Guid Ссылка)
		{
			if(Ссылка == Текст866)
			{
				return ТипыСодержимогоФайлов.Текст866;
			}
			else if(Ссылка == Текст1251)
			{
				return ТипыСодержимогоФайлов.Текст1251;
			}
			else if(Ссылка == xml)
			{
				return ТипыСодержимогоФайлов.xml;
			}
			else if(Ссылка == html)
			{
				return ТипыСодержимогоФайлов.html;
			}
			else if(Ссылка == pdf)
			{
				return ТипыСодержимогоФайлов.pdf;
			}
			else if(Ссылка == rtf)
			{
				return ТипыСодержимогоФайлов.rtf;
			}
			else if(Ссылка == tiff)
			{
				return ТипыСодержимогоФайлов.tiff;
			}
			else if(Ссылка == jpeg)
			{
				return ТипыСодержимогоФайлов.jpeg;
			}
			else if(Ссылка == ms_word)
			{
				return ТипыСодержимогоФайлов.ms_word;
			}
			else if(Ссылка == ms_excel)
			{
				return ТипыСодержимогоФайлов.ms_excel;
			}
			else if(Ссылка == odf_text)
			{
				return ТипыСодержимогоФайлов.odf_text;
			}
			else if(Ссылка == odf_spreadsheet)
			{
				return ТипыСодержимогоФайлов.odf_spreadsheet;
			}
			else if(Ссылка == oxml_word)
			{
				return ТипыСодержимогоФайлов.oxml_word;
			}
			else if(Ссылка == oxml_spreadsheet)
			{
				return ТипыСодержимогоФайлов.oxml_spreadsheet;
			}
			else if(Ссылка == Неизвестный)
			{
				return ТипыСодержимогоФайлов.Неизвестный;
			}
			return ТипыСодержимогоФайлов.ПустаяСсылка;
		}
		public static byte[] Ключ(this ТипыСодержимогоФайлов Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ТипыСодержимогоФайлов Значение)
		{
			switch (Значение)
			{
				case ТипыСодержимогоФайлов.Текст866: return Текст866;
				case ТипыСодержимогоФайлов.Текст1251: return Текст1251;
				case ТипыСодержимогоФайлов.xml: return xml;
				case ТипыСодержимогоФайлов.html: return html;
				case ТипыСодержимогоФайлов.pdf: return pdf;
				case ТипыСодержимогоФайлов.rtf: return rtf;
				case ТипыСодержимогоФайлов.tiff: return tiff;
				case ТипыСодержимогоФайлов.jpeg: return jpeg;
				case ТипыСодержимогоФайлов.ms_word: return ms_word;
				case ТипыСодержимогоФайлов.ms_excel: return ms_excel;
				case ТипыСодержимогоФайлов.odf_text: return odf_text;
				case ТипыСодержимогоФайлов.odf_spreadsheet: return odf_spreadsheet;
				case ТипыСодержимогоФайлов.oxml_word: return oxml_word;
				case ТипыСодержимогоФайлов.oxml_spreadsheet: return oxml_spreadsheet;
				case ТипыСодержимогоФайлов.Неизвестный: return Неизвестный;
			}
			return Guid.Empty;
		}
	}
}