Ext.define('Отчеты.МСФОПрибылиИУбытки.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:276px;height:269px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Отчет о прибылях и убытках по МСФО',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьПериодСоставленияОтчета',
			text: '',
			style: 'position:absolute;left:42px;top:124px;width:180px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод',
			text: '',
			style: 'position:absolute;left:20px;top:124px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод',
			text: '',
			style: 'position:absolute;left:224px;top:124px;width:21px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ОписаниеНормативДок',
			text: '',
			style: 'position:absolute;left:14px;top:173px;width:254px;height:40px;text-align:left;',
		},
		{
			xtype: 'fieldset',
			title: 'Период составления отчета',
			style: 'position:absolute;left:8px;top:53px;width:260px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Форма',
			style: 'position:absolute;left:8px;top:152px;width:260px;height:16px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 260,
			height: 19,
			style: 'position:absolute;left:8px;top:27px;width:260px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Организация',
			style: 'position:absolute;left:8px;top:8px;width:260px;height:15px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораФормы',
			text: 'Выбрать форму',
			style: 'position:absolute;left:8px;top:217px;width:100px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Годовая отчетность',
			style: 'position:absolute;left:8px;top:76px;width:124px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Промежуточная отчетность',
			style: 'position:absolute;left:8px;top:98px;width:164px;height:15px;',
		},
			]
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:244px;width:276px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
				'-',
				{
					text:'Действие1',
				},
			]
		},
	]
});