Ext.define('Документы.НДФЛПодтверждениеПраваНаИмущественныйВычет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 392,width: 621,
	iconCls: 'bogus',
	title: 'Подтверждение права на имущественный вычет',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:113px;top:82px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:113px;top:340px;width:500px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:149px;width:605px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подбор',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:173px;width:605px;height:160px;',
			height: 160,width: 605,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'ФизЛицо',
				},
				{
					text:'ДатаСобытия',
				},
				{
					text:'Расходы',
				},
				{
					text:'ПроцентыПоКредитам',
				},
				{
					text:'ПроцентыПриПерекредитовании',
				},
				{
					text:'КодНалоговогоОргана',
				},
				{
					text:'НомерВходящегоДокумента',
				},
				{
					text:'ДатаУведомления',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:621px;height:25px;',
			items:
			[
				{
					text:'ДействиеОткрытьСвойства',
				},
				{
					text:'Подменю1',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Подменю',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:621px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:113px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:213px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НалоговыйПериод',
			style: 'position:absolute;left:113px;top:107px;width:80px;height:19px;',
		},
	]
});