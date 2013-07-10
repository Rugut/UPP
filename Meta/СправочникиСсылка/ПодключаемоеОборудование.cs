
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
using V82.СправочникиСсылка;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиСсылка
{
	[ProtoContract]
	[DataContract]
	public partial class ПодключаемоеОборудование:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("cdc02669-133d-4b5c-92f3-4740f19682e7");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012018.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///Версия компоненты
		///</summary>
		public string/*(16)*/ ВерсияКомпоненты {get;set;}//Версия компоненты
		///<summary>
		///Уникальный идентификатор устройства стандарта оборудования
		///</summary>
		public string/*(36)*/ ИдентификаторУстройства {get;set;}//Идентификатор устройства
		public bool УстройствоОтключено {get;set;}//Устройство отключено
		public bool УстройствоИспользуется {get;set;}//Устройство используется
		public V82.Перечисления/*Ссылка*/.ОбработчикиДрайверовПодключаемогоОборудования ОбработчикДрайвера {get;set;}//Обработчик драйвера
		public ХранилищеЗначения Параметры {get;set;}
		public V82.СправочникиСсылка.РабочиеМеста РабочееМесто {get;set;}//Рабочее место
		public V82.Перечисления/*Ссылка*/.ТипыПодключаемогоОборудования ТипОборудования {get;set;}//Тип оборудования
		public bool ТребуетсяПереустановка {get;set;}//Требуется переустановка
		
		public ПодключаемоеОборудование()
		{
		}
		
		public ПодключаемоеОборудование(byte[] УникальныйИдентификатор)
			: this(УникальныйИдентификатор,0)
		{
		}
		
		public ПодключаемоеОборудование(byte[] УникальныйИдентификатор,int Глубина)
		{
			if (Глубина>3)
			{
				return;
			}
			if (new Guid(УникальныйИдентификатор) == Guid.Empty)
			{
				return;
			}
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Description [Наименование]
					,_Fld23699 [ВерсияКомпоненты]
					,_Fld23700 [ИдентификаторУстройства]
					,_Fld23701 [УстройствоОтключено]
					,_Fld23702 [УстройствоИспользуется]
					,_Fld23703RRef [ОбработчикДрайвера]
					,_Fld23704 [Параметры]
					,_Fld23705RRef [РабочееМесто]
					,_Fld23706RRef [ТипОборудования]
					,_Fld23707 [ТребуетсяПереустановка]
					From _Reference23119(NOLOCK)
					Where _IDRRef=@УникальныйИдентификатор  ";
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
							Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Наименование = Читалка.GetString(4);
							ВерсияКомпоненты = Читалка.GetString(5);
							ИдентификаторУстройства = Читалка.GetString(6);
							УстройствоОтключено = ((byte[])Читалка.GetValue(7))[0]==1;
							УстройствоИспользуется = ((byte[])Читалка.GetValue(8))[0]==1;
							ОбработчикДрайвера = V82.Перечисления/*Ссылка*/.ОбработчикиДрайверовПодключаемогоОборудования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(9));
							РабочееМесто = new V82.СправочникиСсылка.РабочиеМеста((byte[])Читалка.GetValue(11),Глубина+1);
							ТипОборудования = V82.Перечисления/*Ссылка*/.ТипыПодключаемогоОборудования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(12));
							ТребуетсяПереустановка = ((byte[])Читалка.GetValue(13))[0]==1;
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
		
		public V82.СправочникиОбъект.ПодключаемоеОборудование  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.ПодключаемоеОборудование();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Наименование = Наименование;
			Объект.ВерсияКомпоненты = ВерсияКомпоненты;
			Объект.ИдентификаторУстройства = ИдентификаторУстройства;
			Объект.УстройствоОтключено = УстройствоОтключено;
			Объект.УстройствоИспользуется = УстройствоИспользуется;
			Объект.ОбработчикДрайвера = ОбработчикДрайвера;
			Объект.Параметры = Параметры;
			Объект.РабочееМесто = РабочееМесто;
			Объект.ТипОборудования = ТипОборудования;
			Объект.ТребуетсяПереустановка = ТребуетсяПереустановка;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.ПодключаемоеОборудование ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.ПодключаемоеОборудование)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.ПодключаемоеОборудование(УникальныйИдентификатор);
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