
using System;
using System.IO;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	[ProtoContract]
	[DataContract]
	public partial class НалоговыеОрганы:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("31248f0c-d7f3-45dc-be41-d892b0833ef9");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221190933.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
		public static readonly long КонтрольнаяСуммаКласса = 123;
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления {get;set;}
		public bool Предопределенный {get;set;}
		public Guid Родитель {get;set;}
		public string/*4*/ Код {get;set;}
		public string/*120*/ Наименование {get;set;}
		public V82.СправочникиСсылка.ВидыНалоговыхОрганов Вид {get;set;}//Вид налогового органа
		public string/*(250)*/ ПолноеНаименование {get;set;}//Полное наименование
		public bool УчетНалогоплательщиков {get;set;}//Учет налогоплательщиков
		public bool ПриемНалоговойОтчетности {get;set;}//Прием налоговой отчетности
		public string/*(10)*/ ИНН {get;set;}
		public string/*(9)*/ КПП {get;set;}
		public string/*(128)*/ Адрес {get;set;}
		public string/*(64)*/ Телефон {get;set;}
		public string/*(64)*/ АдресЭлектроннойПочты {get;set;}//Адрес электронной почты
		public string/*(64)*/ АдресСайта {get;set;}//Адрес сайта
		public string/*(250)*/ Комментарий {get;set;}
		public string/*(40)*/ УдалитьСертификат {get;set;}//Удалить сертификат
		public string/*(254)*/ АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками {get;set;}//Адрес электронной почты для целей документооборота с налогоплательщиками

		public V82.СправочникиОбъект.НалоговыеОрганы  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НалоговыеОрганы();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Вид = Вид;
			Объект.ПолноеНаименование = ПолноеНаименование;
			Объект.УчетНалогоплательщиков = УчетНалогоплательщиков;
			Объект.ПриемНалоговойОтчетности = ПриемНалоговойОтчетности;
			Объект.ИНН = ИНН;
			Объект.КПП = КПП;
			Объект.Адрес = Адрес;
			Объект.Телефон = Телефон;
			Объект.АдресЭлектроннойПочты = АдресЭлектроннойПочты;
			Объект.АдресСайта = АдресСайта;
			Объект.Комментарий = Комментарий;
			Объект.УдалитьСертификат = УдалитьСертификат;
			Объект.АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками = АдресЭлектроннойПочтыДляЦелейДокументооборотаСНалогоплательщиками;
			return Объект;
		}

		public void СериализацияProtoBuf(Stream Поток)
		{
			Serializer.Serialize(Поток,this);
		}

		public string СериализацияJson()
		{
			return this.ToJson();
		}

		public string СериализацияXml()
		{
			return this.ToXml();
		}
	}
}