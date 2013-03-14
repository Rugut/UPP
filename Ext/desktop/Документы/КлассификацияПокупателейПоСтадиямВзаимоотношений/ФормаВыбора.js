Ext.define('Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Классификации покупателей по стадиям взаимоотношений',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:704px;height:259px;',
			height: 259,width: 704,
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
					text:'Дата окончания',
					width:'80',
				},
				{
					text:'Периодичность',
					width:'80',
				},
				{
					text:'X класс нач',
					width:'80',
				},
				{
					text:'X класс кон',
					width:'80',
				},
				{
					text:'Y класс нач',
					width:'80',
				},
				{
					text:'Y класс кон',
					width:'80',
				},
				{
					text:'Z класс нач',
					width:'80',
				},
				{
					text:'Z класс кон',
					width:'80',
				},
				{
					text:'Комментарий',
					width:'160',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
			]
		},
	]
});