Ext.define('Документы.ВыгрузкаРегламентированныхОтчетов.ФормаНавигацииПоОшибкам',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:649px;height:148px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Навигация по ошибкам',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:24px;width:649px;height:124px;',
			height: 124,width: 649,
			columns:
			[
				{
					text:'Отчет',
					width:'100',
				},
				{
					text:'Описание',
					width:'102',
				},
				{
					text:'Страница',
					width:'98',
				},
				{
					text:'Строка',
					width:'100',
				},
				{
					text:'Графа',
					width:'100',
				},
				{
					text:'Имя ячейки',
					width:'100',
				},
				{
					text:'Строка п/п',
					width:'100',
				},
				{
					text:'Документ-отчет',
					width:'100',
				},
				{
					text:'Раздел',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:82px;height:24px;',
			items:
			[
				{
					text:'Назад',
				},
				{
					text:'Вперед',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьВсегоОшибок',
			text: '',
			style: 'position:absolute;left:193px;top:5px;width:450px;height:15px;',
		},
	]
});