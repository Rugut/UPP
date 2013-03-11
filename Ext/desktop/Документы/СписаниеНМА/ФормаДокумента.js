Ext.define('Документы.СписаниеНМА.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 253,width: 624,
	iconCls: 'bogus',
	title: 'Списание НМА',
	
	items:
	[
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
			style: 'position:absolute;left:207px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:178px;width:520px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:201px;width:520px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:56px;width:520px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:624px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель4',
				},
				{
					text:'ПроводкиДтКт',
				},
				{
					text:'ПроводкиДтКтНУ',
				},
				{
					text:'СтруктураПодчиненностиДокумента',
				},
				{
					text:'Разделитель6',
				},
				{
					text:'ДействиеОткрытьКатегории',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'ДействиеОткрытьСвойства',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:228px;width:624px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Печать',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие1',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияБУ',
			style: 'position:absolute;left:96px;top:132px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетСписанияНУ',
			style: 'position:absolute;left:96px;top:155px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоБУ',
			style: 'position:absolute;left:269px;top:132px;width:347px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУ',
			style: 'position:absolute;left:269px;top:155px;width:347px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НематериальныйАктив',
			style: 'position:absolute;left:96px;top:79px;width:520px;height:19px;',
		},
	]
});