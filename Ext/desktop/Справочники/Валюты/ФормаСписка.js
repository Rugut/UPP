Ext.define('Справочники.Валюты.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:608px;height:285px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Валюты',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:592px;height:220px;',
			height: 220,width: 592,
			columns:
			[
				{
					text:' ',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Полное наименование',
					width:'220',
				},
				{
					text:'Курс',
					width:'80',
				},
				{
					text:'Кратность',
					width:'80',
				},
				{
					text:'Параметры прописи на русском',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
			items:
			[
				{
					text:'Загрузить курсы',
				},
				'-',
				'-',
				{
					text:'Подбор из ОКВ',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаКурса',
			style: 'position:absolute;left:74px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКурса',
			text: 'Дата курса:',
			style: 'position:absolute;left:8px;top:33px;width:64px;height:19px;',
		},
	]
});