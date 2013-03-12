Ext.define('Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Изменения способов отражения расходов по амортизации НМА',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				'-',
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Движения документа по регистрам',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:380px;',
			height: 380,width: 764,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'БУ',
					width:'20',
				},
				{
					text:'НУ',
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
					text:'Пометка удаления',
					width:'0',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Направление начисления амортизации БУ',
					width:'120',
				},
				{
					text:'Направление начисления амортизации НУ',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
	]
});