
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
	public partial class АнкетаЗастрахованногоЛица:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("96db7f47-f82d-4e5e-b079-b62077ba58a8");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191626.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		///<summary>
		///Любая дополнительная информация
		///</summary>
		public string/*(0)*/ Комментарий {get;set;}
		public V82.СправочникиСсылка.ФизическиеЛица Исполнитель {get;set;}
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		public V82.Перечисления/*Ссылка*/.ФорматФайлаПФР ФорматФайла {get;set;}//Формат файла
		public string/*(5)*/ НомерПачки {get;set;}//Номер пачки
		public bool ЗаменятьБуквуЕ {get;set;}//Заменять букву "ё"
		
		public АнкетаЗастрахованногоЛица()
		{
		}
		
		public АнкетаЗастрахованногоЛица(byte[] УникальныйИдентификатор)
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
					,_Fld4949RRef [Организация]
					,_Fld4950RRef [Ответственный]
					,_Fld4951 [Комментарий]
					,_Fld4952RRef [Исполнитель]
					,_Fld4953 [КраткийСоставДокумента]
					,_Fld4954RRef [ФорматФайла]
					,_Fld4955 [НомерПачки]
					,_Fld4956 [ЗаменятьБуквуЕ]
					From _Document309(NOLOCK)
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
							Комментарий = Читалка.GetString(6);
							КраткийСоставДокумента = Читалка.GetString(8);
							ФорматФайла = V82.Перечисления/*Ссылка*/.ФорматФайлаПФР.ПустаяСсылка.Получить((byte[])Читалка.GetValue(9));
							НомерПачки = Читалка.GetString(10);
							ЗаменятьБуквуЕ = ((byte[])Читалка.GetValue(11))[0]==1;
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
		
		public V82.ДокументыОбъект.АнкетаЗастрахованногоЛица  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.АнкетаЗастрахованногоЛица();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Ответственный = Ответственный;
			Объект.Комментарий = Комментарий;
			Объект.Исполнитель = Исполнитель;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			Объект.ФорматФайла = ФорматФайла;
			Объект.НомерПачки = НомерПачки;
			Объект.ЗаменятьБуквуЕ = ЗаменятьБуквуЕ;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.АнкетаЗастрахованногоЛица ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.АнкетаЗастрахованногоЛица)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.АнкетаЗастрахованногоЛица(УникальныйИдентификатор);
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