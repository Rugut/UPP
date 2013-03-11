Ext.define('Справочники.Резервы.ФормаНастройкиРезервовЗК',
	{
	extend: 'Ext.window.Window',
	height: 249,width: 483,
	iconCls: 'bogus',
	title: 'Форма',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:224px;width:483px;height:25px;',
			items:
			[
				{
					text:'ОсновныеДействияФормыОК',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:31px;width:467px;height:185px;',
			height: 185,width: 467,
			items:
			[
				{
					title:'БазовыеНачисления',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:453px;height:24px;',
			items:
			[
				{
					text:'Подбор',
				},
				{
					text:'ДополнительныеНачисленияОрганизаций',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'ОсновныеНачисленияОрганизаций',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:453px;height:129px;',
			height: 129,width: 453,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ВидРасчета',
				},
			]
		},
					]
				},
				{
					title:'РазмерыОтчислений',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:453px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие9',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:31px;width:453px;height:128px;',
			height: 128,width: 453,
			columns:
			[
				{
					text:'Период',
				},
				{
					text:'Организация',
				},
				{
					text:'Размер',
				},
				{
					text:'Резерв',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:91px;top:7px;width:384px;height:19px;',
		},
	]
});