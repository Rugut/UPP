
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
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class Должности:СправочникСсылка,IСериализаторProtoBuf,IСериализаторJson
	{
		public static readonly Guid ГуидКласса = new Guid("9c95fa50-177e-49ac-9169-d2b7960ad200");
		public static readonly DateTime ВерсияКласса = DateTime.ParseExact("20121221191336.000", new string[] {"yyyyMMddHHmmss.fff"}, CultureInfo.InvariantCulture, DateTimeStyles.None);
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
		public string/*(0)*/ Требования {get;set;}
		public string/*(0)*/ Обязанности {get;set;}
		public string/*(0)*/ Условия {get;set;}
		///<summary>
		///Название вакансии в средствах массовой информации
		///</summary>
		public string/*(200)*/ УдалитьНазваниеВакансииВСМИ {get;set;}//Название вакансии в СМИ
		public V82.СправочникиСсылка.ТиповыеАнкеты АнкетаРезюмеКандидата {get;set;}//Анкета резюме кандидата
		
		public Должности()
		{
		}
		
		public Должности(byte[] УникальныйИдентификатор)
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
					,_Fld2270 [Требования]
					,_Fld2271 [Обязанности]
					,_Fld2272 [Условия]
					,_Fld2273 [УдалитьНазваниеВакансииВСМИ]
					,_Fld2274RRef [АнкетаРезюмеКандидата]
					From _Reference91(NOLOCK)
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
							Требования = Читалка.GetString(6);
							Обязанности = Читалка.GetString(7);
							Условия = Читалка.GetString(8);
							УдалитьНазваниеВакансииВСМИ = Читалка.GetString(9);
							АнкетаРезюмеКандидата = new V82.СправочникиСсылка.ТиповыеАнкеты((byte[])Читалка.GetValue(10));
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
		
		public V82.СправочникиОбъект.Должности  ПолучитьОбъект()
		{
			var Объект = new V82.СправочникиОбъект.Должности();
			Объект._ЭтоНовый = false;
			Объект.Ссылка = Ссылка;
			Объект.Версия = Версия;
			Объект.ПометкаУдаления = ПометкаУдаления;
			Объект.Предопределенный = Предопределенный;
			Объект.Код = Код;
			Объект.Наименование = Наименование;
			Объект.Требования = Требования;
			Объект.Обязанности = Обязанности;
			Объект.Условия = Условия;
			Объект.УдалитьНазваниеВакансииВСМИ = УдалитьНазваниеВакансииВСМИ;
			Объект.АнкетаРезюмеКандидата = АнкетаРезюмеКандидата;
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