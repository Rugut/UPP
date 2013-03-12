Ext.define('Документы.ЗакрытиеГода.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:499px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Закрытие года',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:483px;height:380px;',
			height: 380,width: 483,
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
					text:'Период',
					width:'115',
				},
				{
					text:'Организация',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:499px;height:25px;',
			items:
			[
				'-',
				{
					text:'Печать по умолчанию',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Дт/кт',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Дт/кт',
				},
			]
		},
	]
});