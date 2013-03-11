Ext.define('Справочники.НастройкиРасчетаСебестоимости.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 418,width: 394,
	iconCls: 'bogus',
	title: 'Настройка расчета себестоимости',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:105px;top:83px;width:281px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:394px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:393px;width:394px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыЗакрыть',
				},
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'ОсновныеДействияФормыСохранить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:169px;width:378px;height:189px;',
			height: 189,width: 378,
			items:
			[
				{
					title:'ПараметрыФормируемыхДокументов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:363px;height:133px;',
			height: 133,width: 363,
			columns:
			[
				{
					text:'ВыполняемоеДействие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:363px;height:24px;',
			items:
			[
				{
					text:'Действие2',
				},
				{
					text:'ЗаполнитьВыполняемыеДействия',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель',
				},
			]
		},
					]
				},
				{
					title:'АвтоматическоеФормированиеДокументов',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Задержка',
			style: 'position:absolute;left:218px;top:89px;width:25px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:105px;top:57px;width:281px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:105px;top:33px;width:281px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:105px;top:366px;width:281px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НастройкаЗакрытияМесяца',
			style: 'position:absolute;left:105px;top:109px;width:281px;height:19px;',
		},
	]
});