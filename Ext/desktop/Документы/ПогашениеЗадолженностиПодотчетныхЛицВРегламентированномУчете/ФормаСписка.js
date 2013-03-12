Ext.define('Документы.ПогашениеЗадолженностиПодотчетныхЛицВРегламентированномУчете.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:700px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Погашения задолженности подотчетных лиц в регламентированном учете',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:684px;height:380px;',
			height: 380,width: 684,
			columns:
			[
				{
					text:'',
					width:'20',
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
					text:'Организация',
					width:'180',
				},
				{
					text:'За период',
					width:'84',
				},
				{
					text:'Ответственный',
					width:'180',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:25px;',
			items:
			[
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
			]
		},
	]
});