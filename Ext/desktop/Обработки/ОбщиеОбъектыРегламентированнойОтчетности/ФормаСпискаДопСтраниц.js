Ext.define('Обработки.ОбщиеОбъектыРегламентированнойОтчетности.ФормаСпискаДопСтраниц',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:367px;height:262px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выберите страницу',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:237px;width:367px;height:25px;',
			items:
			[
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:351px;height:197px;',
			height: 197,width: 351,
			columns:
			[
				{
					text:'Представления страниц',
					width:'338',
				},
				{
					text:'Автоматически',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:367px;height:25px;',
			items:
			[
				{
					text:'Редактировать',
				},
				{
					text:'Переместить вверх',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'Сортировать по убыванию',
				},
			]
		},
	]
});