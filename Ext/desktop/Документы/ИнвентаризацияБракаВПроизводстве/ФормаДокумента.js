Ext.define('Документы.ИнвентаризацияБракаВПроизводстве.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 458,width: 652,
	iconCls: 'bogus',
	title: 'Инвентаризация брака в производстве',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:652px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьКатегории1',
				},
				{
					text:'ДействиеОткрытьСвойства1',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ПоказатьСкрытьСчетаУчета',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:433px;width:652px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Печать',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:406px;width:548px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:130px;width:636px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ПодменюЗаполнить',
				},
				{
					text:'ПоОстаткам',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:155px;width:636px;height:220px;',
			height: 220,width: 636,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'СтатьяЗатрат',
				},
				{
					text:'НоменклатурнаяГруппа',
				},
				{
					text:'Заказ',
				},
				{
					text:'Продукция',
				},
				{
					text:'ХарактеристикаПродукции',
				},
				{
					text:'СерияПродукции',
				},
				{
					text:'Сумма',
				},
				{
					text:'СуммаРегл',
				},
				{
					text:'СуммаНал',
				},
				{
					text:'СчетЗатрат',
				},
				{
					text:'СчетЗатратНУ',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:424px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:382px;width:548px;height:19px;',
		},
	]
});