Ext.define('Документы.КорректировкаСтоимостиСписанияТоваров.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:558px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировки стоимости списания товаров',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:542px;height:259px;',
			height: 259,width: 542,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'УУ',
					width:'21',
				},
				{
					text:'БУ',
					width:'21',
				},
				{
					text:'НУ',
					width:'21',
				},
				{
					text:'МУ',
					width:'21',
				},
				{
					text:'Дата',
					width:'140',
				},
				{
					text:'Номер',
					width:'56',
				},
				{
					text:'За период',
					width:'95',
				},
				{
					text:'Организация',
					width:'139',
				},
				{
					text:'Ответственный',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:558px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Перейти',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Структура подчиненности документа',
				},
				'-',
					]
				},
				'-',
				{
					text:'Дт/кт',
				},
				{
					text:'Дт/кт',
				},
			]
		},
	]
});