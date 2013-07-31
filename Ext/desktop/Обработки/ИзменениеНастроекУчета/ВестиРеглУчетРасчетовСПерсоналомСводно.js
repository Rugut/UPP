Ext.require(['Данные.Обработки.ИзменениеНастроекУчета'], function () 
{
	Ext.define('Обработки.ИзменениеНастроекУчета.ВестиРеглУчетРасчетовСПерсоналомСводно',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:169px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Установка параметра учета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись41',
			text: 'На счетах бухгалтерского и налогового учета:\r\n70      "Расчеты с персоналом по оплате труда"\r\n76.04 "Расчеты по депонированным суммам"\r\n97.01 "Расходы на оплату труда будущих периодов" ',
			style: 'position:absolute;left:8px;top:80px;width:384px;height:56px;',
		},
		{
			xtype: 'label',
			name: 'Надпись59',
			text: 'Способ ведения расчетов с персоналом в регламентированном учете:',
			style: 'position:absolute;left:8px;top:5px;width:384px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'По каждому работнику',
			style: 'position:absolute;left:31px;top:32px;width:281px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Сводно по всем работникам',
			style: 'position:absolute;left:31px;top:54px;width:281px;height:19px;',
		},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:144px;width:400px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Изменить настройку',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});