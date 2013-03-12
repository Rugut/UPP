Ext.define('Отчеты.ВизитныеКарточкиРаботников.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:490px;height:397px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка ""Визитные карточки сотрудников""',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:372px;width:490px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
				'-',
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:8px;width:474px;height:356px;',
			height: 356,width: 474,
			items:
			[
				{
					title:'Общие',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:48px;width:460px;height:282px;',
			height: 282,width: 460,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Тип',
					width:'120',
				},
				{
					text:'Вид',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:24px;width:250px;height:24px;',
			items:
			[
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'',
				},
			]
		},
					]
				},
				{
					title:'Группировки',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:306px;',
			height: 306,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'305',
				},
				{
					text:'Тип',
					width:'122',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:459px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Отбор',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:306px;',
			height: 306,width: 460,
			columns:
			[
				{
					text:'',
					width:'21',
				},
				{
					text:'Поле',
					width:'122',
				},
				{
					text:'Тип сравнения',
					width:'82',
				},
				{
					text:'Значение',
					width:'100',
				},
				{
					text:'С',
					width:'100',
				},
				{
					text:'По',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
				{
					title:'Сортировка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:460px;height:306px;',
			height: 306,width: 460,
			columns:
			[
				{
					text:'Поле',
					width:'331',
				},
				{
					text:'Направление',
					width:'94',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:460px;height:24px;',
			items:
			[
			]
		},
					]
				},
			]
		},
	]
});