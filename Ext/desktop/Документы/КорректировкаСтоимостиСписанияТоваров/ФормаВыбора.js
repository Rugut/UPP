Ext.define('Документы.КорректировкаСтоимостиСписанияТоваров.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:548px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировки стоимости списания товаров',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:532px;height:259px;',
			height: 259,width: 532,
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
					width:'113',
				},
				{
					text:'Организация',
					width:'127',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:548px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				'-',
				{
					text:'Выбрать',
				},
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Дт/кт',
				},
				'-',
			]
		},
	]
});