Ext.define('Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаНастройкиПолейНаименованияОбъектаПриЗагрузке',
	{
	extend: 'Ext.window.Window',
	height: 363,width: 326,
	iconCls: 'bogus',
	title: 'Настройка представления наименования объекта при загрузке',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:33px;width:310px;height:24px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие7',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:310px;height:297px;',
			height: 297,width: 310,
			columns:
			[
				{
					text:'Использование',
				},
				{
					text:'ИмяРеквизита',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:326px;height:25px;',
			items:
			[
			]
		},
	]
});