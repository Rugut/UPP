Ext.define('Документы.ФормированиеЗаписейКнигиПродаж.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:540px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Формирования записей книги продаж',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:524px;height:280px;',
			height: 280,width: 524,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'120',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'По реализации 0%',
					width:'60',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:540px;height:25px;',
			items:
			[
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Движения документа по регистрам',
				},
				'-',
				'-',
				{
					text:'Выбрать',
				},
				{
					text:'Дт/кт',
				},
			]
		},
	]
});