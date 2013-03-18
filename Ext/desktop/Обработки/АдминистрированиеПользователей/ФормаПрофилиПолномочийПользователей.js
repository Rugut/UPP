Ext.define('Обработки.АдминистрированиеПользователей.ФормаПрофилиПолномочийПользователей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:674px;height:443px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Профили полномочий пользователей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:674px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
				'-',
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Пользователи с текущим профилем',
				},
				'-',
				{
					text:'Свойства',
				},
				{
					text:'Категории',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:246px;top:129px;width:420px;height:98px;',
			height: 98,width: 420,
			columns:
			[
				{
					text:'Имя роли',
					width:'142',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:232px;height:378px;',
			height: 378,width: 232,
			columns:
			[
				{
					text:'Наименование',
					width:'135',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:246px;top:285px;width:420px;height:126px;',
			height: 126,width: 420,
			columns:
			[
				{
					text:'Право',
					width:'357',
				},
				{
					text:'Значение',
					width:'58',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:246px;top:258px;width:420px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Копировать',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОсновнойИнтерфейс',
			text: 'Основной интерфейс:',
			style: 'position:absolute;left:246px;top:60px;width:114px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:363px;top:60px;width:192px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:246px;top:105px;width:420px;height:24px;',
			items:
			[
				{
					text:'Изменить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:418px;width:674px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьРолиПрофиля',
			text: 'Роли профиля',
			style: 'position:absolute;left:246px;top:84px;width:420px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТекущийПрофиль',
			text: ' Текущий профиль',
			style: 'position:absolute;left:246px;top:33px;width:420px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеПрава',
			text: 'Дополнительные права',
			style: 'position:absolute;left:246px;top:237px;width:420px;height:19px;',
		},
	]
});