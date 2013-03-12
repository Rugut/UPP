Ext.define('Документы.ОбъявлениеНаВзносНаличными.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:556px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Объявления на взнос наличными',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:540px;height:380px;',
			height: 380,width: 540,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Сумма',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:556px;height:25px;',
			items:
			[
				'-',
				{
					text:'Движения документа по регистрам',
				},
				'-',
				{
					text:'Действие',
				},
				{
					text:'Структура подчиненности документа',
				},
			]
		},
	]
});