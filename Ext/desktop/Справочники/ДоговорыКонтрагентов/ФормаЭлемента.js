Ext.define('Справочники.ДоговорыКонтрагентов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 579,width: 511,
	iconCls: 'bogus',
	title: 'Договор контрагента',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:106px;top:105px;width:284px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:511px;height:25px;',
			items:
			[
				{
					text:'Подменю',
				},
				{
					text:'Файлы',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Файлы',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:423px;top:105px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:106px;top:526px;width:397px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:106px;top:81px;width:397px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:554px;width:511px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				{
					text:'РазделительЗакрыть',
				},
				{
					text:'Записать',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'РазделительОК',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:175px;width:495px;height:346px;',
			height: 346,width: 495,
			items:
			[
				{
					title:'Общие',
				},
				{
					title:'УчетТоваров',
				},
				{
					title:'Дополнительно',
				},
				{
					title:'УсловияДоговора',
				},
				{
					title:'Скидки',
				},
				{
					title:'Свойства',
				},
				{
					title:'Категории',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:106px;top:57px;width:397px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:106px;top:33px;width:397px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:106px;top:153px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:229px;top:153px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокДействия',
			style: 'position:absolute;left:423px;top:153px;width:80px;height:19px;',
		},
	]
});