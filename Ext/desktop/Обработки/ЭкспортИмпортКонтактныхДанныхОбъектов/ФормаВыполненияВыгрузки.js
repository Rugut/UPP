Ext.define('Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаВыполненияВыгрузки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:496px;height:461px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выполнение выгрузки',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:436px;width:496px;height:25px;',
			items:
			[
				'-',
				{
					text:'<< Назад',
				},
				'-',
				{
					text:'Далее >>',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Готово',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:480px;height:400px;',
			height: 400,width: 480,
			items:
			[
				{
					title:'ЗаполнениеТаблицыПолей',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:480px;height:360px;',
			height: 360,width: 480,
			columns:
			[
				{
					text:'№',
					width:'32',
				},
				{
					text:'',
					width:'20',
				},
				{
					text:'Тип',
					width:'180',
				},
				{
					text:'Имя поля выгрузки',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:480px;height:24px;',
			items:
			[
				{
					text:'Установить флажки',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Переместить вверх',
				},
				'-',
				{
					text:'&Переместить вниз',
				},
				{
					text:'Снять флажки',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
					]
				},
				{
					title:'НастройкаВыгрузкиЗначений',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:40px;width:480px;height:360px;',
			height: 360,width: 480,
			columns:
			[
				{
					text:'№',
					width:'32',
				},
				{
					text:'Объект выгрузки',
					width:'220',
				},
				{
					text:'Контрагент',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:16px;width:480px;height:24px;',
			items:
			[
				{
					text:'Закончить редактирование',
				},
				'-',
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Заполнить все элементы',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Удалить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				'-',
				{
					text:'&Переместить вниз',
				},
				{
					text:'Очистить',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Подбор',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'&Переместить вверх',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Сохранять соответствие параметров для последующих выгрузок',
			style: 'position:absolute;left:8px;top:413px;width:369px;height:15px;',
		},
	]
});