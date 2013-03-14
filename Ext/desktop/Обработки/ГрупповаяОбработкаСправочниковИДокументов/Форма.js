Ext.define('Обработки.ГрупповаяОбработкаСправочниковИДокументов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:573px;height:414px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Групповая обработка справочников и документов',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:573px;height:25px;',
			items:
			[
				{
					text:'Настройка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:389px;width:573px;height:25px;',
			items:
			[
				{
					text:'Отобрать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:557px;height:348px;',
			height: 348,width: 557,
			items:
			[
				{
					title:'Объекты отбора',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Тип объекта:',
			style: 'position:absolute;left:8px;top:11px;width:68px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:65px;width:543px;height:93px;',
			height: 93,width: 543,
			columns:
			[
				{
					text:'Представление таблицы',
					width:'100',
				},
				{
					text:'Имя таблицы',
					width:'194',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:202px;width:543px;height:120px;',
			height: 120,width: 543,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Поле',
					width:'100',
				},
				{
					text:'Тип сравнения',
					width:'63',
				},
				{
					text:'Значение',
					width:'98',
				},
				{
					text:'С',
					width:'98',
				},
				{
					text:'По',
					width:'98',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:41px;width:543px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:178px;width:543px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Обрабатывать табличные части',
			style: 'position:absolute;left:246px;top:11px;width:186px;height:19px;',
		},
					]
				},
				{
					title:'Обработка',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:543px;height:24px;',
			items:
			[
				'-',
				{
					text:'Установить все флажки',
				},
				{
					text:'Снять все флажки',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:543px;height:231px;',
			height: 231,width: 543,
			columns:
			[
				{
					text:'Вид',
					width:'100',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДействия',
			style: 'position:absolute;left:291px;top:286px;width:174px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Выполнить',
			text: 'Выполнить',
			style: 'position:absolute;left:469px;top:286px;width:80px;height:19px;',
		},
					]
				},
			]
		},
	]
});