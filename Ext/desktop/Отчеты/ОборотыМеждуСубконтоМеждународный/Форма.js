Ext.require(['Данные.Отчеты.ОборотыМеждуСубконтоМеждународный'], function () 
{
	Ext.define('Отчеты.ОборотыМеждуСубконтоМеждународный.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:400px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отчет Обороты между субконто',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьДатаНач',
			text: 'Период с:',
			style: 'position:absolute;left:20px;top:33px;width:56px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНач',
			width: 84,
			height: 19,
			style: 'position:absolute;left:80px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаКон',
			text: 'по:',
			style: 'position:absolute;left:168px;top:33px;width:28px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаКон',
			width: 84,
			height: 19,
			style: 'position:absolute;left:200px;top:33px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:340px;top:33px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Организация.Представление',
			width: 216,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:416px;top:33px;width:216px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.ОборотыМеждуСубконтоМеждународный.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОборотыМеждуСубконтоМеждународный.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.ОборотыМеждуСубконтоМеждународный.ФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.ОборотыМеждуСубконтоМеждународный.ФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			width: 640,
			height: 25,
			items:
			[
				{
					text:'Сформировать',
					tooltip:'6c0f41f-b55c-4408-baae-3c58736335b',
				},
				{
					text:'Заголовок',
					tooltip:'',
				},
				{
					text:'Настройка...',
					tooltip:'',
				},
				'-',
				{
					text:'Възстанови стойностите...',
					tooltip:'Восстановить значения',
					iconCls:'x-RestoreValues',
				},
				{
					text:'Съхрани стойностите...',
					tooltip:'Сохранить значения',
					iconCls:'x-SaveValues',
				},
				'-',
				{
					text:'Затвори',
					tooltip:'Закрыть',
					iconCls:'x-Close',
				},
			]
		},
		{
			xtype: 'button',
			name: 'НастройкаПериода',
			text: '...',
			style: 'position:absolute;left:288px;top:33px;width:24px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});