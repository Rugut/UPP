
using System;
using System.Collections;
using System.IO;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыСсылка
{
	///<summary>
	///(Регл)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class СведенияОВзносахИСтраховомСтажеСПВ1:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("a83e74a9-aca7-4148-b877-7e765c78eb51");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928011951.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime Дата {get;set;}
		public DateTime ПрефиксНомера {get;set;}
		public string/*11*/ Номер {get;set;}
		public bool Проведен {get;set;}
		public V82.СправочникиСсылка.Организации Организация {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		public bool ПринятоВПФР {get;set;}//Принято в ПФР
		public string/*(5)*/ НомерПачки {get;set;}//Номер пачки
		public V82.Перечисления/*Ссылка*/.КатегорииЗастрахованныхЛицПФР КатегорияЗастрахованныхЛиц {get;set;}//Категория застрахованных лиц
		public DateTime ОтчетныйПериод {get;set;}//Отчетный период
		public V82.Перечисления/*Ссылка*/.ТипыСведенийСЗВ ТипСведенийСЗВ {get;set;}//Тип сведений СЗВ
		public V82.СправочникиСсылка.ФизическиеЛица Руководитель {get;set;}
		///<summary>
		///(Регл)
		///</summary>
		public V82.СправочникиСсылка.ДолжностиОрганизаций ДолжностьРуководителя {get;set;}//Должность руководителя
		public V82.Перечисления/*Ссылка*/.ФорматФайлаПФР ФорматФайла {get;set;}//Формат файла
		
		public СведенияОВзносахИСтраховомСтажеСПВ1()
		{
		}
		
		public СведенияОВзносахИСтраховомСтажеСПВ1(byte[] УникальныйИдентификатор)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_Number [Номер]
					,_Fld25346RRef [Организация]
					,_Fld25347 [Комментарий]
					,_Fld25348RRef [Ответственный]
					,_Fld25349 [КраткийСоставДокумента]
					,_Fld25350 [ПринятоВПФР]
					,_Fld25351 [НомерПачки]
					,_Fld25352RRef [КатегорияЗастрахованныхЛиц]
					,_Fld25353 [ОтчетныйПериод]
					,_Fld25354RRef [ТипСведенийСЗВ]
					,_Fld25355RRef [Руководитель]
					,_Fld25356RRef [ДолжностьРуководителя]
					,_Fld25357RRef [ФорматФайла]
					From _Document23170(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор";
					Команда.Parameters.AddWithValue("УникальныйИдентификатор", УникальныйИдентификатор);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							//ToDo: Читать нужно через GetValues()
							Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Номер = Читалка.GetString(3);
							Комментарий = Читалка.GetString(5);
							КраткийСоставДокумента = Читалка.GetString(7);
							ПринятоВПФР = ((byte[])Читалка.GetValue(8))[0]==1;
							НомерПачки = Читалка.GetString(9);
							КатегорияЗастрахованныхЛиц = V82.Перечисления/*Ссылка*/.КатегорииЗастрахованныхЛицПФР.ПустаяСсылка.Получить((byte[])Читалка.GetValue(10));
							ОтчетныйПериод = Читалка.GetDateTime(11);
							ТипСведенийСЗВ = V82.Перечисления/*Ссылка*/.ТипыСведенийСЗВ.ПустаяСсылка.Получить((byte[])Читалка.GetValue(12));
							ФорматФайла = V82.Перечисления/*Ссылка*/.ФорматФайлаПФР.ПустаяСсылка.Получить((byte[])Читалка.GetValue(15));
							//return Ссылка;
						}
						else
						{
							//return null;
						}
					}
				}
			}
		}
		
		public V82.ДокументыОбъект.СведенияОВзносахИСтраховомСтажеСПВ1  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.СведенияОВзносахИСтраховомСтажеСПВ1();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			Объект.ПринятоВПФР = ПринятоВПФР;
			Объект.НомерПачки = НомерПачки;
			Объект.КатегорияЗастрахованныхЛиц = КатегорияЗастрахованныхЛиц;
			Объект.ОтчетныйПериод = ОтчетныйПериод;
			Объект.ТипСведенийСЗВ = ТипСведенийСЗВ;
			Объект.Руководитель = Руководитель;
			Объект.ДолжностьРуководителя = ДолжностьРуководителя;
			Объект.ФорматФайла = ФорматФайла;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.СведенияОВзносахИСтраховомСтажеСПВ1 ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.СведенияОВзносахИСтраховомСтажеСПВ1)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.СведенияОВзносахИСтраховомСтажеСПВ1(УникальныйИдентификатор);
			Кэш.Add(УИ, Ссылка);
			return Ссылка;
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