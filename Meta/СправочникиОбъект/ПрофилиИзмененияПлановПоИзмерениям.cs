
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	///<summary>
	///(Упр)
	///</summary>
	public partial class ПрофилиИзмененияПлановПоИзмерениям:СправочникОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		public Guid Ссылка;
		public long Версия;
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления;
		public bool Предопределенный;
		public Guid Владелец;
		public bool ЭтоГруппа;
		public Guid Родитель;
		public string/*9*/ Код;
		public string/*50*/ Наименование;
		public V82.Перечисления/*Ссылка*/.ВидыРаспределенийПоИзмерениямБюджетирования ВидРаспределения;//Вид распределения
		///<summary>
		///Измерение бюджетирования
		///</summary>
		public V82.Перечисления/*Ссылка*/.ИзмеренияБюджетирования ИзмерениеБюджетирования;//Измерение бюджетирования
		public V82.СправочникиСсылка.ИсточникиДанныхДляРасчетовБюджетирования ИсточникДанных;//Источник данных
		public string/*(50)*/ ПоказательИсточника;//Показатель источника
		///<summary>
		///Значение будет распределяться по всем элементами справочника
		///</summary>
		public bool ПоВсемЭлементам;//По всем элементам
		public void Записать()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Reference207(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Folder
						,_Code
						,_Description
						,_Fld3282RRef
						,_Fld3283RRef
						,_Fld3284RRef
						,_Fld3285
						,_Fld3286)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@ЭтоГруппа
						,@Код
						,@Наименование
						,@ВидРаспределения
						,@ИзмерениеБюджетирования
						,@ИсточникДанных
						,@ПоказательИсточника
						,@ПоВсемЭлементам)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference207
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Folder	= @ЭтоГруппа
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld3282RRef	= @ВидРаспределения
						,_Fld3283RRef	= @ИзмерениеБюджетирования
						,_Fld3284RRef	= @ИсточникДанных
						,_Fld3285	= @ПоказательИсточника
						,_Fld3286	= @ПоВсемЭлементам
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("ЭтоГруппа", ЭтоГруппа?new byte[]{0}:new byte[]{1});
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("ВидРаспределения", ВидРаспределения.Ключ());
					Команда.Parameters.AddWithValue("ИзмерениеБюджетирования", ИзмерениеБюджетирования.Ключ());
					Команда.Parameters.AddWithValue("ИсточникДанных", ИсточникДанных.Ссылка);
					Команда.Parameters.AddWithValue("ПоказательИсточника", ПоказательИсточника);
					Команда.Parameters.AddWithValue("ПоВсемЭлементам", ПоВсемЭлементам);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Reference207
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}