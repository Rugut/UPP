
using System;
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
	public partial class КонтактныеЛица:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("3789a6e5-800c-4b85-9e16-379a617595c6");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191737.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		[DataMember(Name = "Представление")]//Проверить основное представление.
		[ProtoMember(3)]
		public string/*100*/ Наименование {get;set;}
		public string/*(50)*/ Фамилия {get;set;}
		public string/*(50)*/ Имя {get;set;}
		public decimal/*(2)*/ КоличествоДнейДоНапоминания {get;set;}//Количество дней до напоминания
		public bool НапоминатьОДнеРождения {get;set;}//Напоминать о дне рождения
		public string/*(50)*/ Отчество {get;set;}
		public DateTime ДатаРождения {get;set;}//Дата рождения
		public string/*(0)*/ Описание {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		public V82.Перечисления/*Ссылка*/.ПолФизическихЛиц Пол {get;set;}
		
		public КонтактныеЛица()
		{
		}
		
		public КонтактныеЛица(byte[] УникальныйИдентификатор)
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
					,_Fld2448 [Фамилия]
					,_Fld2449 [Имя]
					,_Fld2450 [КоличествоДнейДоНапоминания]
					,_Fld2451 [НапоминатьОДнеРождения]
					,_Fld2452 [Отчество]
					,_Fld2453 [ДатаРождения]
					,_Fld2454 [Описание]
					,_Fld2455RRef [Пол]
					From _Reference128(NOLOCK)
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
							Фамилия = Читалка.GetString(6);
							Имя = Читалка.GetString(7);
							КоличествоДнейДоНапоминания = Читалка.GetDecimal(8);
							НапоминатьОДнеРождения = ((byte[])Читалка.GetValue(9))[0]==1;
							Отчество = Читалка.GetString(10);
							ДатаРождения = Читалка.GetDateTime(11);
							Описание = Читалка.GetString(12);
							Пол = V82.Перечисления/*Ссылка*/.ПолФизическихЛиц.ПустаяСсылка.Получить((byte[])Читалка.GetValue(13));
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
		
		public V82.СправочникиОбъект.КонтактныеЛица  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.КонтактныеЛица();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Фамилия = Фамилия;
			Объект.Имя = Имя;
			Объект.КоличествоДнейДоНапоминания = КоличествоДнейДоНапоминания;
			Объект.НапоминатьОДнеРождения = НапоминатьОДнеРождения;
			Объект.Отчество = Отчество;
			Объект.ДатаРождения = ДатаРождения;
			Объект.Описание = Описание;
			Объект.Пол = Пол;
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