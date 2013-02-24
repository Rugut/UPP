
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
	///Список настроек закрытия месяца
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class НастройкиЗакрытияМесяца:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("547f291a-e843-4909-ac3d-bd2577d287c0");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191745.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public bool ЭтоГруппа {get;set;}
		public string/*70*/ Наименование {get;set;}
		public DateTime ДатаНачалаДействияНастройки {get;set;}//Начало действия
		public bool ОтражатьВУправленческомУчете {get;set;}//Отражать в управленческом учете
		public bool ОтражатьВБухгалтерскомУчете {get;set;}//Отражать в бухгалтерском учете
		public bool ОтражатьВНалоговомУчете {get;set;}//Отражать в налоговом учете
		public decimal/*(1)*/ ВариантНастройки {get;set;}//Вариант настройки

		public V82.СправочникиОбъект.НастройкиЗакрытияМесяца  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.НастройкиЗакрытияМесяца();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Родитель = Родитель;
			Объект.ЭтоГруппа = ЭтоГруппа;
			Объект.Наименование = Наименование;
			Объект.ДатаНачалаДействияНастройки = ДатаНачалаДействияНастройки;
			Объект.ОтражатьВУправленческомУчете = ОтражатьВУправленческомУчете;
			Объект.ОтражатьВБухгалтерскомУчете = ОтражатьВБухгалтерскомУчете;
			Объект.ОтражатьВНалоговомУчете = ОтражатьВНалоговомУчете;
			Объект.ВариантНастройки = ВариантНастройки;
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