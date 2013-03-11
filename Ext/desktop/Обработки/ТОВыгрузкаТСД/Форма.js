Ext.define('Обработки.ТОВыгрузкаТСД.Форма',
	{
	extend: 'Ext.window.Window',
	height: 398,width: 700,
	iconCls: 'bogus',
	title: 'Выгрузка данных в ТСД',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:373px;width:700px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Выгрузить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:226px;width:684px;height:139px;',
			height: 139,width: 684,
			columns:
			[
				{
					text:'Выгружать',
				},
				{
					text:'Код',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'Штрихкод',
				},
				{
					text:'Характеристика',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'Артикул',
				},
				{
					text:'Серия',
				},
				{
					text:'Качество',
				},
				{
					text:'Склад',
				},
				{
					text:'Количество',
				},
				{
					text:'ТипЦен',
				},
				{
					text:'Цена',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:201px;width:684px;height:24px;',
			items:
			[
				{
					text:'ВыделитьВсе',
				},
				{
					text:'ОчиститьВыделение',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:700px;height:24px;',
			items:
			[
				{
					text:'Отбор',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель2',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:71px;width:684px;height:107px;',
			height: 107,width: 684,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиСклад',
			style: 'position:absolute;left:336px;top:6px;width:342px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиТипЦен',
			style: 'position:absolute;left:336px;top:31px;width:342px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиНоменклатура',
			style: 'position:absolute;left:336px;top:56px;width:342px;height:20px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеНастройкиГруппа',
			style: 'position:absolute;left:336px;top:81px;width:342px;height:20px;',
		},
					]
				},
			]
		},
	]
});