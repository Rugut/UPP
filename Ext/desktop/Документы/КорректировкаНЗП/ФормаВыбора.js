Ext.define('Документы.КорректировкаНЗП.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:516px;height:421px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Корректировка незавершенного производства',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:500px;height:380px;',
			height: 380,width: 500,
			columns:
			[
				{
					text:'',
					width:'32',
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
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:516px;height:25px;',
			items:
			[
				{
					text:'Структура подчиненности документа',
				},
				'-',
				'-',
				{
					text:'Дт/кт',
				},
				'-',
				{
					text:'Движения документа по регистрам',
				},
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