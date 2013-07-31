Ext.require(['Данные.Справочники.КодыОКПД'], function () 
{
	Ext.define('Справочники.КодыОКПД.ФормаЗагрузкаИзФайла',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:320px;height:146px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Загрузка справочника ОКПД из CSV файла',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'ТекстПутьКФайлу',
			text: 'Путь к файлу :',
			style: 'position:absolute;left:8px;top:9px;width:304px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПутьКФайлу',
			width: 304,
			height: 19,
			style: 'position:absolute;left:8px;top:33px;width:304px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'СтрокаИнфо',
			text: 'СтрокаИнфо',
			style: 'position:absolute;left:8px;top:57px;width:304px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:121px;width:320px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});