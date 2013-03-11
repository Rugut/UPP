Ext.define('Обработки.ТОЗагрузкаККМOffline.Форма',
	{
	extend: 'Ext.window.Window',
	height: 442,width: 780,
	iconCls: 'bogus',
	title: 'Обработка  Загрузка ККМ Off-Line',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие1',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Загрузить',
				},
				{
					text:'РедактироватьСписокВыгрузки',
				},
				{
					text:'РедактироватьСписокВыгрузки',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действия',
				},
				{
					text:'Загрузить',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТекущийСклад',
			style: 'position:absolute;left:115px;top:33px;width:404px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ККМOffline',
			style: 'position:absolute;left:115px;top:57px;width:404px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:132px;width:764px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:157px;width:764px;height:277px;',
			height: 277,width: 764,
			columns:
			[
				{
					text:'КодТовараККМ',
				},
				{
					text:'КодТовара',
				},
				{
					text:'Номенклатура',
				},
				{
					text:'ЕдиницаИзмерения',
				},
				{
					text:'ХарактеристикаНоменклатуры',
				},
				{
					text:'Серия',
				},
				{
					text:'Цена',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТипЦен',
			style: 'position:absolute;left:115px;top:81px;width:404px;height:19px;',
		},
	]
});