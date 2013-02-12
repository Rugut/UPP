
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
	///(Упр) Магнитные и штриховые карты.
	///</summary>
	public partial class ИнформационныеКарты:СправочникОбъект
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
		public string/*(100)*/ КодКарты;//Код карты
		public object ВладелецКарты;//Владелец карты
		public V82.Перечисления/*Ссылка*/.ВидыИнформационныхКарт ВидКарты;//Вид карты
		public V82.Перечисления/*Ссылка*/.ТипыИнформационныхКарт ТипКарты;//Тип карты
		public object ТипШтрихКода;//Тип штрих кода
		public V82.СправочникиСсылка.ВидыДисконтныхКарт ВидДисконтнойКарты;//Вид дисконтной карты
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
						Insert Into _Reference105(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Folder
						,_Code
						,_Description
						,_Fld2351
						,_Fld2353RRef
						,_Fld2354RRef
						,_Fld2355RRef
						,_Fld2356RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@ЭтоГруппа
						,@Код
						,@Наименование
						,@КодКарты
						,@ВидКарты
						,@ТипКарты
						,@ТипШтрихКода
						,@ВидДисконтнойКарты)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference105
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Folder	= @ЭтоГруппа
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2351	= @КодКарты
						,_Fld2353RRef	= @ВидКарты
						,_Fld2354RRef	= @ТипКарты
						,_Fld2355RRef	= @ТипШтрихКода
						,_Fld2356RRef	= @ВидДисконтнойКарты
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
					Команда.Parameters.AddWithValue("КодКарты", КодКарты);
					Команда.Parameters.AddWithValue("ВидКарты", ВидКарты.Ключ());
					Команда.Parameters.AddWithValue("ТипКарты", ТипКарты.Ключ());
					Команда.Parameters.AddWithValue("ТипШтрихКода", Guid.Empty);
					Команда.Parameters.AddWithValue("ВидДисконтнойКарты", ВидДисконтнойКарты.Ссылка);
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
					Команда.CommandText = @"Delete _Reference105
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}