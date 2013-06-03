
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
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class БюджетнаяОперация:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("f11199aa-c4f8-47f5-8802-09ec4c31a26a");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191914.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.СценарииПланирования Сценарий {get;set;}
		public DateTime ПериодПланирования {get;set;}//Период планирования
		public V82.СправочникиСсылка.СтатьиОборотовПоБюджетам СтатьяОборотов {get;set;}//Статья оборотов
		public V82.СправочникиСсылка.КлассификаторЕдиницИзмерения ЕдиницаИзмерения {get;set;}//Единица измерения
		public V82.СправочникиСсылка.Подразделения ЦФО {get;set;}
		public V82.СправочникиСсылка.Проекты Проект {get;set;}
		public V82.СправочникиСсылка.Контрагенты Контрагент {get;set;}
		public object Номенклатура {get;set;}
		public decimal/*(15.3)*/ Количество {get;set;}
		public decimal/*(15.2)*/ Цена {get;set;}
		public decimal/*(15.2)*/ Сумма {get;set;}
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		public decimal/*(10.4)*/ КурсДокумента {get;set;}//Курс документа
		public decimal/*(10)*/ КратностьДокумента {get;set;}//Кратность документа
		public V82.Перечисления/*Ссылка*/.СостоянияОбъектов Состояние {get;set;}
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		
		public БюджетнаяОперация()
		{
		}
		
		public БюджетнаяОперация(byte[] УникальныйИдентификатор)
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
					,_Fld4985RRef [Сценарий]
					,_Fld4986 [ПериодПланирования]
					,_Fld4987RRef [СтатьяОборотов]
					,_Fld4988RRef [ЕдиницаИзмерения]
					,_Fld4989RRef [ЦФО]
					,_Fld4990RRef [Проект]
					,_Fld4991RRef [Контрагент]
					,_Fld4992_TYPE [Номенклатура_Тип],_Fld4992_RRRef [Номенклатура],_Fld4992_RTRef [Номенклатура_Вид]
					,_Fld4993 [Количество]
					,_Fld4994 [Цена]
					,_Fld4995 [Сумма]
					,_Fld4996RRef [ВалютаДокумента]
					,_Fld4997 [КурсДокумента]
					,_Fld4998 [КратностьДокумента]
					,_Fld4999RRef [Состояние]
					,_Fld5000RRef [Ответственный]
					,_Fld5001 [Комментарий]
					From _Document311(NOLOCK)
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
							ПериодПланирования = Читалка.GetDateTime(5);
							Количество = Читалка.GetDecimal(14);
							Цена = Читалка.GetDecimal(15);
							Сумма = Читалка.GetDecimal(16);
							КурсДокумента = Читалка.GetDecimal(18);
							КратностьДокумента = Читалка.GetDecimal(19);
							Состояние = V82.Перечисления/*Ссылка*/.СостоянияОбъектов.ПустаяСсылка.Получить((byte[])Читалка.GetValue(20));
							Комментарий = Читалка.GetString(22);
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
		
		public V82.ДокументыОбъект.БюджетнаяОперация  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.БюджетнаяОперация();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Сценарий = Сценарий;
			Объект.ПериодПланирования = ПериодПланирования;
			Объект.СтатьяОборотов = СтатьяОборотов;
			Объект.ЕдиницаИзмерения = ЕдиницаИзмерения;
			Объект.ЦФО = ЦФО;
			Объект.Проект = Проект;
			Объект.Контрагент = Контрагент;
			Объект.Номенклатура = Номенклатура;
			Объект.Количество = Количество;
			Объект.Цена = Цена;
			Объект.Сумма = Сумма;
			Объект.ВалютаДокумента = ВалютаДокумента;
			Объект.КурсДокумента = КурсДокумента;
			Объект.КратностьДокумента = КратностьДокумента;
			Объект.Состояние = Состояние;
			Объект.Ответственный = Ответственный;
			Объект.Комментарий = Комментарий;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.БюджетнаяОперация ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.БюджетнаяОперация)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.БюджетнаяОперация(УникальныйИдентификатор);
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