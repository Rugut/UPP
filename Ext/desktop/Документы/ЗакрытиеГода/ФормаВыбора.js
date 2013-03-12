Ext.define('Документы.ЗакрытиеГода.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:572px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Закрытие года',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:556px;height:380px;',
			height: 380,width: 556,
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
					text:'За период',
					width:'115',
				},
				{
					text:'Организация',
					width:'126',
				},
				{
					text:'Комментарий',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:572px;height:25px;',
			items:
			[
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
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
					text:'Структура подчиненности документа',
				},
			]
		},
	]
});