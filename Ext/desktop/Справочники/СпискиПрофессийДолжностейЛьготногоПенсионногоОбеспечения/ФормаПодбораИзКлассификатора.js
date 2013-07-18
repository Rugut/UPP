Ext.require(['Данные.Справочники.СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспечения'], function () 
{
	Ext.define('Справочники.СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспечения.ФормаПодбораИзКлассификатора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:780px;height:448px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Профессии и должности льготного пенсионного обеспечения',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		],
	}],
	dockedItems:
	[
	]
	});
});