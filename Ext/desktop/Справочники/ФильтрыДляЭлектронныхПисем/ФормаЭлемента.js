Ext.define('Справочники.ФильтрыДляЭлектронныхПисем.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 423,width: 714,
	iconCls: 'bogus',
	title: 'Фильтры для электронных писем',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:640px;top:57px;width:66px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:99px;top:33px;width:502px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Владелец',
			style: 'position:absolute;left:99px;top:57px;width:502px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:99px;width:347px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:123px;width:347px;height:243px;',
			height: 243,width: 347,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ОтрицаниеУсловия',
				},
				{
					text:'Условие',
				},
				{
					text:'ЗначениеУсловия',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:359px;top:99px;width:347px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:359px;top:123px;width:347px;height:267px;',
			height: 267,width: 347,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ДействиеФильтра',
				},
				{
					text:'ГруппаПисем',
				},
				{
					text:'Оформление',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:714px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:398px;width:714px;height:25px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});