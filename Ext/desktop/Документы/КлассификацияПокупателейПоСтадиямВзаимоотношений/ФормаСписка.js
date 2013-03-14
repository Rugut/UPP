Ext.define('Документы.КлассификацияПокупателейПоСтадиямВзаимоотношений.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:370px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Классификации покупателей по стадиям взаимоотношений',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:329px;',
			height: 329,width: 764,
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
					text:'Количество периодов анализа',
					width:'60',
				},
				{
					text:'Разовый покупатель нач',
					width:'80',
				},
				{
					text:'Разовый покупатель кон',
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
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
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