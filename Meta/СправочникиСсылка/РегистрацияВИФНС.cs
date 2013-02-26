
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
	public partial class РегистрацияВИФНС:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("67230299-cc8c-48c3-87af-6812ca8526d2");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221190818.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*4*/ Код {get;set;}
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*50*/ Наименование {get;set;}
		///<summary>
		///Код причины постановки
		///</summary>
		public string/*(9)*/ КПП {get;set;}
		public string/*(254)*/ НаименованиеИФНС {get;set;}//Наименование ИФНС
		///<summary>
		///Представитель в территориальном органе ФНС
		///</summary>
		public object Представитель {get;set;}
		///<summary>
		///Название документа, подтверждающего полномочия представителя
		///</summary>
		public string/*(1000)*/ ДокументПредставителя {get;set;}//Документ представителя
		public string/*(0)*/ УполномоченноеЛицоПредставителя {get;set;}//Уполномоченное лицо представителя
		///<summary>
		///Доверенность налогоплательщика на представителя
		///</summary>
		public V82.СправочникиСсылка.ДоверенностиНалогоплательщика Доверенность {get;set;}
		
		public РегистрацияВИФНС()
		{
		}
		
		public РегистрацияВИФНС(byte[] УникальныйИдентификатор)
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
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld3366 [КПП]
					,_Fld3367 [НаименованиеИФНС]
					,_Fld3368_TYPE [Представитель_Тип],_Fld3368_RRRef [Представитель],_Fld3368_RTRef [Представитель_Вид]
					,_Fld3369 [ДокументПредставителя]
					,_Fld3370 [УполномоченноеЛицоПредставителя]
					,_Fld3371RRef [Доверенность]
					From _Reference219(NOLOCK)
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
							Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1;
							Код = Читалка.GetString(4);
							Наименование = Читалка.GetString(5);
							КПП = Читалка.GetString(6);
							НаименованиеИФНС = Читалка.GetString(7);
							ДокументПредставителя = Читалка.GetString(11);
							УполномоченноеЛицоПредставителя = Читалка.GetString(12);
							Доверенность = new V82.СправочникиСсылка.ДоверенностиНалогоплательщика((byte[])Читалка.GetValue(13));
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
		
		public V82.СправочникиОбъект.РегистрацияВИФНС  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.РегистрацияВИФНС();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Владелец = Владелец;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.КПП = КПП;
			Объект.НаименованиеИФНС = НаименованиеИФНС;
			Объект.Представитель = Представитель;
			Объект.ДокументПредставителя = ДокументПредставителя;
			Объект.УполномоченноеЛицоПредставителя = УполномоченноеЛицоПредставителя;
			Объект.Доверенность = Доверенность;
			return Объект;
		}
		
		private static readonly Hashtable Кэш = new Hashtable(1000);
		
		public static V82.СправочникиСсылка.РегистрацияВИФНС ВзятьИзКэша(byte[] УникальныйИдентификатор)
		{
			var УИ = new Guid(УникальныйИдентификатор);
			if (Кэш.ContainsKey(УИ))
			{
				return (V82.СправочникиСсылка.РегистрацияВИФНС)Кэш[УИ];
			}
			var Ссылка = new V82.СправочникиСсылка.РегистрацияВИФНС(УникальныйИдентификатор);
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