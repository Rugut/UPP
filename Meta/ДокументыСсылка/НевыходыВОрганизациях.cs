﻿
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
	public partial class НевыходыВОрганизациях:ДокументСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("657d800b-2199-426b-bcee-7dbcd2054c79");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20120928012011.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public DateTime ПериодРегистрации {get;set;}//Период регистрации
		public string/*(100)*/ КраткийСоставДокумента {get;set;}//Краткий состав документа
		public V82.ДокументыСсылка.НевыходыВОрганизациях ПерерассчитываемыйДокумент {get;set;}//Перерассчитываемый документ
		public V82.Перечисления/*Ссылка*/.СпособыРегистрацииВремени СпособРегистрацииВремени {get;set;}//Способ регистрации времени
		
		public НевыходыВОрганизациях()
		{
		}
		
		public НевыходыВОрганизациях(byte[] УникальныйИдентификатор)
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
					,_Fld6576RRef [Организация]
					,_Fld6577 [Комментарий]
					,_Fld6578RRef [Ответственный]
					,_Fld6579 [ПериодРегистрации]
					,_Fld6580 [КраткийСоставДокумента]
					,_Fld6581RRef [ПерерассчитываемыйДокумент]
					,_Fld21677RRef [СпособРегистрацииВремени]
					From _Document330(NOLOCK)
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
							ПериодРегистрации = Читалка.GetDateTime(7);
							КраткийСоставДокумента = Читалка.GetString(8);
							ПерерассчитываемыйДокумент = new V82.ДокументыСсылка.НевыходыВОрганизациях((byte[])Читалка.GetValue(9));
							СпособРегистрацииВремени = V82.Перечисления/*Ссылка*/.СпособыРегистрацииВремени.ПустаяСсылка.Получить((byte[])Читалка.GetValue(10));
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
		
		public V82.ДокументыОбъект.НевыходыВОрганизациях  ПолучитьОбъект()
		{
			var Объект = new V82.ДокументыОбъект.НевыходыВОрганизациях();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Номер = Номер;
			Объект.Организация = Организация;
			Объект.Комментарий = Комментарий;
			Объект.Ответственный = Ответственный;
			Объект.ПериодРегистрации = ПериодРегистрации;
			Объект.КраткийСоставДокумента = КраткийСоставДокумента;
			Объект.ПерерассчитываемыйДокумент = ПерерассчитываемыйДокумент;
			Объект.СпособРегистрацииВремени = СпособРегистрацииВремени;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.ДокументыСсылка.НевыходыВОрганизациях ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.ДокументыСсылка.НевыходыВОрганизациях)Кэш[УИ];
			}
			var Ссылка = new V82.ДокументыСсылка.НевыходыВОрганизациях(УникальныйИдентификатор);
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