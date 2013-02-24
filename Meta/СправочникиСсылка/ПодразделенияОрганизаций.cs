
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
	///(Общ)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ПодразделенияОрганизаций:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("216d90ff-d8c0-4976-94ae-f803a6162ede");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191306.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public Guid Владелец {get;set;}
		public Guid Родитель {get;set;}
		public string/*9*/ Код {get;set;}
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ВидыПодразделений ВидПодразделения {get;set;}//Вид подразделения
		///<summary>
		///(Регл)
		///</summary>
		public string/*(11)*/ КодПоОКАТО {get;set;}//Код по ОКАТО
		///<summary>
		///(Регл)
		///</summary>
		public string/*(9)*/ КПП {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(5.2)*/ РайонныйКоэффициент {get;set;}//Районный коэффициент
		///<summary>
		///(Регл)
		///</summary>
		public decimal/*(5.2)*/ РайонныйКоэффициентРФ {get;set;}//Районный коэффициент РФ
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ТерриториальныеУсловия ТерриториальныеУсловияПФР {get;set;}//Территориальные условия ПФР
		public decimal/*(6)*/ Порядок {get;set;}
		public bool СоответствуетСудамПодФлагомРФ {get;set;}//Соответствует судам под флагом РФ

		public V82.СправочникиОбъект.ПодразделенияОрганизаций  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ПодразделенияОрганизаций();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Родитель = Родитель;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.ВидПодразделения = ВидПодразделения;
			Объект.КодПоОКАТО = КодПоОКАТО;
			Объект.КПП = КПП;
			Объект.РайонныйКоэффициент = РайонныйКоэффициент;
			Объект.РайонныйКоэффициентРФ = РайонныйКоэффициентРФ;
			Объект.ТерриториальныеУсловияПФР = ТерриториальныеУсловияПФР;
			Объект.Порядок = Порядок;
			Объект.СоответствуетСудамПодФлагомРФ = СоответствуетСудамПодФлагомРФ;
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