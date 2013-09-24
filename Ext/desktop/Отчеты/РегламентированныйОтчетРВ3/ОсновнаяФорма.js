Ext.require(['Данные.Отчеты.РегламентированныйОтчетРВ3'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетРВ3.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:276px;height:258px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'РВ-3 ПФР',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьПериодСоставленияОтчета',
			text: 'НадписьПериодСоставленияОтчета',
			style: 'position:absolute;left:42px;top:85px;width:176px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод',
			text: '',
			style: 'position:absolute;left:17px;top:85px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод',
			text: '',
			style: 'position:absolute;left:222px;top:85px;width:21px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеНормативДок',
			text: 'ОписаниеНормативДок',
			style: 'position:absolute;left:17px;top:139px;width:244px;height:56px;text-align:left;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораФормы',
			text: 'Выбрать форму',
			style: 'position:absolute;left:17px;top:206px;width:100px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Период составления отчета',
			style: 'position:absolute;left:8px;top:60px;width:260px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Форма',
			style: 'position:absolute;left:8px;top:121px;width:260px;height:15px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация.Представление',
			width: 260,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:8px;top:27px;width:260px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.РегламентированныйОтчетРВ3.ОсновнаяФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.РегламентированныйОтчетРВ3.ОсновнаяФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.РегламентированныйОтчетРВ3.ОсновнаяФормаСобытия'], function ()
					{
						var объект = Ext.create("Отчеты.РегламентированныйОтчетРВ3.ОсновнаяФормаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'fieldset',
			title: 'Организация',
			style: 'position:absolute;left:8px;top:8px;width:260px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:233px;width:276px;height:25px;',
			width: 276,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'',
				},
				'-',
				{
					text:'Отмена',
					tooltip:'Закрыть',
					iconCls:'x-Close',
				},
				'-',
				{
					text:'Действие1',
					tooltip:'Открыть справку',
				},
			]
		},
	]
	});
});