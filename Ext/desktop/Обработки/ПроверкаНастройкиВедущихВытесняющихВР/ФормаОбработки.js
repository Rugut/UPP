Ext.define('Обработки.ПроверкаНастройкиВедущихВытесняющихВР.ФормаОбработки',
	{
	extend: 'Ext.window.Window',
	height: 376,width: 638,
	iconCls: 'bogus',
	title: 'Проверка настройки списков ведущих и вытесняющих видов расчета',
	
	items:
	[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:9px;width:622px;height:327px;',
			height: 327,width: 622,
			items:
			[
				{
					title:'НачальнаяСтраница',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:40px;width:610px;height:60px;',
			height: 60,width: 610,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'ОбязательныеКУдалению',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:40px;width:316px;height:145px;',
			height: 145,width: 316,
			columns:
			[
				{
					text:'Ссылка',
				},
				{
					text:'ВидРасчетаУдалить',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:191px;width:610px;height:130px;',
			height: 130,width: 610,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'РедактированиеСписка',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:43px;width:308px;height:130px;',
			height: 130,width: 308,
			columns:
			[
				{
					text:'',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:179px;width:610px;height:142px;',
			height: 142,width: 610,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:5px;top:43px;width:301px;height:91px;',
			height: 91,width: 301,
			columns:
			[
				{
					text:'',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:314px;top:43px;width:289px;height:91px;',
			height: 91,width: 289,
			columns:
			[
				{
					text:'',
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'СохранениеНастроек',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:40px;width:610px;height:60px;',
			height: 60,width: 610,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаИсправитьОшибки',
			text: 'Записать исправления',
			style: 'position:absolute;left:355px;top:336px;width:130px;height:32px;',
		},
		{
			xtype: 'button',
			name: 'Отмена',
			text: 'Отмена',
			style: 'position:absolute;left:495px;top:336px;width:130px;height:32px;',
		},
	]
});