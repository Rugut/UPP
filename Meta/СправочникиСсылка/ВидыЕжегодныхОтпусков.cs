
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
	///<summary>
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ВидыЕжегодныхОтпусков:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("b6221f64-3866-4e90-9e72-25ff02587d8c");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191738.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*9*/ Код {get;set;}
		public string/*100*/ Наименование {get;set;}
		public V82.Перечисления/*Ссылка*/.СпособыРасчетаОстаткаОтпуска СпособРасчетаОстаткаОтпуска {get;set;}//Способ расчета остатка отпуска
		public decimal/*(2)*/ КоличествоДнейОтпускаВГод {get;set;}//Количество дней отпуска в год
		public bool ПредоставлятьОтпускВсемСотрудникам {get;set;}//Предоставлять отпуск всем сотрудникам

		public V82.СправочникиОбъект.ВидыЕжегодныхОтпусков  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ВидыЕжегодныхОтпусков();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.СпособРасчетаОстаткаОтпуска = СпособРасчетаОстаткаОтпуска;
			Объект.КоличествоДнейОтпускаВГод = КоличествоДнейОтпускаВГод;
			Объект.ПредоставлятьОтпускВсемСотрудникам = ПредоставлятьОтпускВсемСотрудникам;
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