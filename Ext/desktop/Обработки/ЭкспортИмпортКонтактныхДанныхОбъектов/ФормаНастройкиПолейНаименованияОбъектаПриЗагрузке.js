Ext.define('Обработки.ЭкспортИмпортКонтактныхДанныхОбъектов.ФормаНастройкиПолейНаименованияОбъектаПриЗагрузке',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:326px;height:363px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка представления наименования объекта при загрузке',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:33px;width:310px;height:24px;',
			items:
			[
				{
					text:'&Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
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
					text:'',
					width:'18',
				},
				{
					text:'Имя реквизита',
					width:'283',
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